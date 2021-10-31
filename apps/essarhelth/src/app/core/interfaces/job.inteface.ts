export interface Job{
 id: string | number;
 title: string;
 shortDescription: string;
 description: string;
 roles : string[],
 requirements: string[],
 location: string;
 contractType: string;
 date: Date | string;
 profession: string;
 salary: string;
}
