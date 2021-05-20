//Own type
type ID = string;

type PopularTag = string;

interface TownInterface{
    id: ID,
    name: string,
    province: string,
}

// const PopularTags: string[] = ['fun','adventure'];
const PopularTags: PopularTag[] = ['fun','adventure'];
