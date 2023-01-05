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
const Form = ({handleSubmit}) => {
    const [formValues, setFormValues] = useState({
        name: '',
        priceUnitary: '',
        size: '',
        description: ''
    })

    const inputFileRef = useRef()

    const iFRef = inputFileRef.current && inputFileRef.current.children[0];

    // e de evento
    const handleChange = (e) => {
        const {name, value} = e.target
        //esto sirve para que tome del valor del objeto y cambie solo la propiedad que tenga ese nombre por ese valor
        setFormValues({ ...formValues, [name]: value})
    }

    const _handleSubmit = (e) => {
        e.preventDefault()
        handleSubmit({...formValues, image: iFRef.files[0]})
        console.log(formValues)
        console.log(iFRef.files[0])
    }

    return (
        <form onSubmit={_handleSubmit}>
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
                    <div ref={inputFileRef}>
                    <Input type="file" />
                    </div>
                </Control>
            </Field>
            <Button color="primary" type="submit">
                Save
            </Button>
        </form>
    )
}


export default Form