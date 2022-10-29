import styled from 'styled-components'

const Input = styled.input`
	border: none;
	border-radius: 2px;
	font-size: large;
	padding: 5px;
	&:focus {
		outline: solid 3px rgba(0, 160, 255, .4);
	}
`

const Label = styled.label`
	border: none;
	border-radius: 2px;
	font-size: small;
	margin-left: 3px;
	&::after {
		content: " :"
	}
	&:focus {
		outline: solid 3px rgba(0, 160, 255, .4);
	}
`

const Fieldset = styled.fieldset`
	display: flex;
	flex-direction: column;
	border: none;
	min-width: 40%;
	margin: 1.5rem auto;
	text-align: left;
	padding: 0;
	&:last-of-type {
		width: 90%;
	}
`

const Error = styled.small`
	color: #ef4444;
	font-size: x-small;
	margin-left: 3px;
`

export const Button = styled.button`
	background-color: rgb(0, 120, 255);
	border: none;
	border-radius: 2px;
	padding: 5px;
	font-size: large;
	flex-basis: 90%;
	//width: 80%;
	margin-top: 1.5rem;
	&:hover {
		cursor: pointer;
		background-color: rgb(24, 132, 255);
	}
`

export const Form = styled.form`
	background-color: #292929;
	border-radius: 2px;
	box-shadow: 0 0 2px 2px rgba(0,0,0,.05);
	width: 60%;
	padding: 2rem 0;
	justify-content: center;
	display: flex;
	flex-flow: row wrap;
`

export const Result = styled.textarea`
	border-radius: 2px;
	resize: none;
	margin-top: 1.5rem;
	width: 60%;
	&:focus {
		outline: solid 3px rgba(0, 160, 255, .4);
	}
`

export const Field = ({ placeholder, label, error, onChange }: { placeholder?: string, label?: string, error: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
	return <Fieldset className={error ? "error" : ""}>
		<Label>{label}</Label>
		<Input onChange={onChange} placeholder={placeholder} />
		{error ? <Error>{error}</Error> : ""}
	</Fieldset>
}
