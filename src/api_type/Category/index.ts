export type CategoryType = {
    id: number;
    categoryName: string;
    description: string;
};

export type GetAllCategoryResponse = {
    result: CategoryType[];
    message: string;
};