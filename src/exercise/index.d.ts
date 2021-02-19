declare module 'str-utils' {
    type StrUtil = (input: string) => string;

    export const strReverse: StrUtil;
    export const strToLower: StrUtil;
    export const strToUpper: StrUtil;
    export const strRandomize: StrUtil;
    export const strInvertCase: StrUtil;

}
declare module 'stats' {

    type sortType<T> = (a: T, b: T) => number
    type AverageType<T> = (a: T) => number
    
    type Index = <T>(array: T[], sortType: sortType<T>) => number
    type Item = <T>(array: T[], sortType: sortType<T>) => T | null
    type Average = <T>(array: T[], sortType: AverageType<T>) => number

    // type H = <T>(array:T[],sortType)=>number
    export const getMaxIndex: Index;
    export const getMinIndex: Index;
    export const getMedianIndex: Index;

    export const getMaxElement: Item;
    export const getMinElement: Item;
    export const getMedianElement: Item;

    export const getAverageValue: Average;

}

  
import 'date-wizard';

declare module 'date-wizard' {
    const pad: (ident: number) => string;

    interface DateDetails {
        hours: number;
        minutes: number;
        seconds: number;
    }
}