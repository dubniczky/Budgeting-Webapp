export class BudgetItem {
    title: string
    value: number
    category: string

    constructor(title:string, value:number, category:string) {
        this.title = title
        this.value = value
        this.category = category
    }
}
