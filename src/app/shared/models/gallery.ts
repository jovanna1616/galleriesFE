export class Gallery {
	constructor(
		public id?: number,
	    public name?: string,
	    public description?: string,
	    public userId?: number,
	    public createdAt?: string,
	    public updatedAt?: string,
	    public userFirstName?: string,
	    public userLastName?: string,
	    public images?: Array<string>
	) { }
}
