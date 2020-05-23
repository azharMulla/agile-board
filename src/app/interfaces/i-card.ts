export interface ICard {
    content: string;
    isEditable?: boolean;
    votes?:number;
}
 export interface ISection{
     title: string;
     class?: string;
     cards?: ICard[];
 }