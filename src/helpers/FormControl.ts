import { FormEvent } from "react"
import { Field, Fields } from '../types/Fields'
import { convertBase } from "./BaseConverter";

// Displayed rror messages
const error_messages = {
	required_field: "Required field",
	invalid_base: "Invalid length or duplicates characters in base",
	wrong_str_format: "Input data includes chars that input base doesn't have"
}

// Check if input string includes non-supported chars in given base
const isInputStrInInputBase = (base: string, str: string) => {
	let err = false;
	str.split('').forEach(char => {
		if(!base.includes(char)) return err = true;
	})
	return !err;
}

const clearErrors = (obj: Object) => {
	Object.keys(obj).forEach(key => {
		if(typeof obj[key as keyof object] == 'object')
			(obj[key as keyof object] as Field).error = ""
	})
}

const validate = ({ data, error, base }: { data: string, error: string, base?: string }, type: "str" | "base" = "base") => {
	switch (type) {
		case "base":
			error = data.length < 2 || new Set(data.split('')).size !== data.length ? error_messages["invalid_base"] : "";
			break;
		case "str":
			error = !isInputStrInInputBase(base!, data) ? error_messages["wrong_str_format"] : "";
			break;
	}
	return error
}

// Control form submit event
export const formControl = (e: FormEvent, fields: Fields, updateFields: React.Dispatch<React.SetStateAction<Fields>>) => {

	// Stop default behavior and propagation
	e.preventDefault();
	e.stopPropagation();

	// Clear errors, in case the form was previously sent with errors
	clearErrors(fields)

	// Check for empty fields
	fields = {
		inputBase: {
			data: fields.inputBase.data,
			error: !fields.inputBase.data ? error_messages["required_field"] : ""
		},
		outputBase: {
			data: fields.outputBase.data,
			error: !fields.outputBase.data ? error_messages["required_field"] : ""
		},
		inputData: {
			data: fields.inputData.data,
			error: !fields.inputData.data ? error_messages["required_field"] : ""
		},
		outputData: fields.outputData
	}

	// Check if fields format are good
	// Base must be at least 2 chars long, and mustn't include duplicated chars
	if(!fields.inputBase.error)
		fields.inputBase.error = validate(fields.inputBase);

	if(!fields.outputBase.error)
		fields.outputBase.error = validate(fields.outputBase);

	// Input string must include only given base-supported chars
	if(!fields.inputData.error)
		fields.inputData.error = validate({...fields.inputData, base: fields.inputBase.data}, "str")

	// If there's no error, convert the string from input base to output base
	if(Object.entries(fields).filter(e => {
		if(typeof e[1] == "object") return e[1].error !== ""
	}).length == 0)
		fields.outputData = convertBase(fields.inputData.data, fields.inputBase.data, fields.outputBase.data);
		
	// Finally, update component state, to display / hide errors on the form
	updateFields(fields);
}