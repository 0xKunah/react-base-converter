import { useState } from 'react'
import { Button, Field, Form, Result } from '../components/Form'
import { Container, Title } from '../components/Globals'
import { formControl } from '../helpers/FormControl'
import { Fields } from '../types/Fields'

export default function App() {

  const [fields, updateFields] = useState<Fields>({
    inputBase: { data: "", error: "" },
    outputBase: { data: "", error: "" },
    inputData: { data: "", error: "" },
    outputData: ""
  })
  
  return (
    <Container>
      <Form onSubmit={e => formControl(e, fields, updateFields)}>
        <Title>Base converter</Title>
        <Field onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateFields({...fields, inputBase: {...fields.inputBase, data: e.target.value}})}
          label='Input base' placeholder='Ex: 0123456789ABC' error={fields.inputBase.error}
        />
        <Field onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateFields({...fields, outputBase: {...fields.outputBase, data: e.target.value}})}
          label='Output base' placeholder='Ex: 0123456789ABC' error={fields.outputBase.error}
        />
        <Field onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateFields({...fields, inputData: {...fields.inputData, data: e.target.value}})}
          label='Input data' placeholder='Ex: A super string to convert' error={fields.inputData.error}
        />
        <Button>Convert</Button>
      </Form>
      {fields.outputData ?  <Result readOnly value={fields.outputData} /> : ""}
    </Container>
  )
}
