
import { flatten } from 'lodash';
import { SentMessageInfo } from 'nodemailer';
import * as nodemailer from 'nodemailer';
import Mail, { Address } from 'nodemailer/lib/mailer';
import { environment } from '../environments/environment';


 class Mailer {
  /**
   * Sends an email.
   * @param {UserDocument} user Recipient
   * @param {string} subject Subject of the email
   * @param {string} template Name of the Handlebars template, without path or extension
   * @param {string} [emailAddress] If set, this email as the recipient's email instead of the user's default.
   * @return Promise<SentMessageInfo>
   */
  public async sendEmail(
    user: { name: string, email: string },
    subject: string,
    data: any,
    emailAddress?: string,
  ): Promise<SentMessageInfo> {
    // const what = template.replace(/-/g, ' ');
    const text = this.wrap(this.createTemplate(data), 200);
    // setup email
    const email: Mail.Options = {
      from: {
        name: "Kiran Gopal",
        address: environment.nodeMailer.auth.user,
      },
      to: { name: user.name, address: emailAddress || user.email },
      subject,
      html:text,
    };

    // create reusable transporter object using the default SMTP transport
    const transport = nodemailer.createTransport(environment.nodeMailer);
    console.log(
      `[mailer.sendEmail] Sending %s email to <%s>... >>> ' ${(email.to as Address).address} `,
    );
    const status = await transport.sendMail(email);

    if (status.messageId) {
      console.log(
        '[mailer.sendEmail] Successfully sent %s mail to <%s> with message ID "%s" (%s).',
        // what,
        (email.to as Address).address,
        status.messageId,
        status.response,
      );
    } else {
      console.log(
        '[mailer.sendEmail] Failed sending %s mail to <%s>: %s.',
        // what,
        (email.to as Address).address,
        status.response,
      );
    }
    return status;
  }

  /**
   * Wraps a text into multiple lines
   *
   * @param {string} text Text to wrap
   * @param {number} width Line width in chars
   * @param {string} [indent=''] String to prefix before each line
   * @returns {string}
   */
  private wrap(text: string, width: number, indent = ' ') {
    const newline = '\n' + indent;
    const reTest = new RegExp('.{1,' + width + '}(\\s+|$)', 'g');
    const reMatch = new RegExp('.{1,' + width + '}(\\s+|$)|\\S+?(\\s+|$)', 'g');
    const lines = flatten(
      text.split(/\r?\n/).map(line => {
        if (reTest.test(line)) {
          const match = line.match(reMatch);
          return match[0].trim() ? match : line;
        }
        return line;
      }),
    );
    return indent + lines.join(newline);
  }

  private createTemplate(data: any) {
    let template = "";
    if (data) {
      for (const key in data) {
        template = `${template} <br> <li>${key}: ${data[key]}</li>`
      }
    }
    const html = `<div><ul>${template}</ul></div>`
    return html;
  }
}

export default new Mailer;
