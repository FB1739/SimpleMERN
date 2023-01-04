import React, {useRef, useState} from "react";
import { Form as BulmaForm, Button } from "react-bulma-components";

const { Input, Field, Control, Label } = BulmaForm


/* Otra forma de hacerlo
        <div class="field">
            <label class="label">Name</label>
            <div class="control">
                <input class="input" type="text" placeholder="Text input"/>
            </div>
        </div>
*/
const Form = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        priceUnitary: '',
        size: '',
        description: ''
    })

    const inputFileRef = useRef(null)

    // e de evento
    const handleChange = (e) => {
        const {name, value} = e.target
        //esto sirve para que tome del valor del objeto y cambie solo la propiedad que tenga ese nombre por ese valor
        setFormValues({ ...formValues, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValues)
        console.log(inputFileRef.current.files())
    }

    return (
        <form onSubmit={handleSubmit}>
            <Field>
                <Label>Nombre</Label>
                <Control>
                    <Input placeholder="Text input" name="name" value={formValues.name} onChange={handleChange}/>
                </Control>
            </Field>
            <Field>
                <Label>Precio unitario</Label>
                <Control>
                    <Input placeholder="Text input" name="priceUnitary" value={formValues.priceUnitary} onChange={handleChange} type="number"/>
                </Control>
            </Field>
            <Field>
                <Label>Tamaño</Label>
                <Control>
                    <Input placeholder="Text input" name="size" value={formValues.size} onChange={handleChange} type="number"/>
                </Control>
            </Field>
            <Field>
                <Label>Descripcion</Label>
                <Control>
                    <Input placeholder="Text input" name="description" value={formValues.description} onChange={handleChange}/>
                </Control>
            </Field>
            <Field>
                <Label>Imagen</Label>
                <Control>
                    <Input type="file" ref={useRef(0)}/>
                </Control>
            </Field>
            <Button color="primary" type="submit">
                Save
            </Button>
        </form>
    )
}


export default React.forwardRef(Form)