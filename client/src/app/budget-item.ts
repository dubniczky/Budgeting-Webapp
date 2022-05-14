const categoryTypes = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
]

export class BudgetItem {
    
    id: number
    title: string
    value: number
    category: string

    constructor(title:string = '', value:number = 0, category:string = '') {
        this.id = -1
        this.title = title
        this.value = value
        this.category = category
    }

    categoryHashCode() {
        var hash = 0, i, chr
        if (this.category.length === 0) return hash
        for (i = 0; i < this.category.length; i++) {
            chr   = this.category.charCodeAt(i)
            hash  = ((hash << 5) - hash) + chr
            hash |= 0
        }
        return hash
    };

    getCategoryType() {
        return categoryTypes[ this.categoryHashCode() % categoryTypes.length ]
    }
}
