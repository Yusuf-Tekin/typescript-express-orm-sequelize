import { CustomError } from "./CustomError";



export class NotFoundCityError extends CustomError {
    constructor() {
        super(
            "Şehir bulunamadı",
            404
        )
    }
}