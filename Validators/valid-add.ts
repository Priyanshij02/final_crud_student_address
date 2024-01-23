import { check } from "express-validator";
import { Validator } from "../res-handler/Validator/validator";
import exp from "constants";

// validators are used to check whether input matches your criteria 
// also create will state this will go in body ::
class Addressvalidator extends Validator {
    constructor() {
        super({
            create: [
                // here trim is used to returns a copy of string  that not contain any spaces 
                check('state').trim().notEmpty().escape()
                    .withMessage("State name is required ").isAlpha() .withMessage("state name should be alphabet"),
                // escape is used to protecting yourself from cross site scrtipting 

                check('city').trim().notEmpty().withMessage("city is required").isAlpha()
                    .withMessage("city name should be alphabet"),
                
                check('pincode').trim().notEmpty().isLength({ min: 6, max: 70 })
                    .withMessage("pincode should be within range "),

            ],
            update: [
                // optional feature allow to access property 
                check('state').trim().optional().notEmpty().escape().withMessage("statName is Required")
                    .isAlpha().withMessage("state name first letter should be capital."),

                check('city').trim().optional().notEmpty().escape().withMessage("city name Required")
                    .isAlpha().withMessage("city must be alphabet letters."),

                check('pincode').trim().optional().notEmpty().isLength({ min: 6, max: 70 })
                    .withMessage("pincode shouldn't exceeds max length ."),
            ]
        })
    }
}
export default Addressvalidator;