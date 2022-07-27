/**
 * --------------Widget Card-----------------
 */
export interface ListWidgetI{
    id:number,
    image:string,
    name:string,
    subname:string,
    type: string, //down | up | price 
    value:string,
    redirectTo:string
}

export interface WidgetI{
    imageWidget: string,
    nameWidget:string,
    list: ListWidgetI[],
    urlMore:string
}

/**
 * --------------Widget Slider-----------------
 */

export interface WidgetSliderListI {
    id:number,
    image:string,
    accountName:string,
    accountFollow:string,
    redirectTo:string,
    date?:string,
    totalComments?:string,
    totalLikes?:string,
    totalViews?:string,
    text1?:string,
    text2?:string,
}
export interface WidgetCardSliderI{
    titleTop:string,
    urlIcon:string,
    type:string,
    list: WidgetSliderListI[]
}

