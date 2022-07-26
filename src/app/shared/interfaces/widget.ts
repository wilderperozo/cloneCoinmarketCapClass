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
}

export interface WidgetI{
    imageWidget: string,
    nameWidget:string,
    list: ListWidgetI[],
}

/**
 * --------------Widget Slider-----------------
 */
export interface TopPostI{
    accountName:string,
    accountFollow:string,
    imagePost:string,
    date:string,
    totalComments:string,
    totalLikes:string,
    text1:string,
    text2:string,
    redirectTo:string,
    titleTop:string
}

export interface  TopArticleI{
    imageArticle:string,
    accountName:string,
    date:string,
    imageAvatar:string,
    totalViews:string,
    totalLikes:string,
    text:string,
    redirectTo:string,
    titleTop:string
}

export interface ListTopCommunityI{
    id:number,
    image:string,
    accountName:string,
    accountFollow:string,
    redirectTo:string
}

export interface TopCommunityI{
    titleTop:string,
    list: ListTopCommunityI[]|[]
}

export interface WidgetSliderI{
    totalSliders:number,
    contentsTopCommunity:TopCommunityI[],
    contentsTopPost:TopPostI[],
    contentsTopAriticle: TopArticleI[]
}

