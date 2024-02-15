import { useState } from 'react'
import styles from './Formulaire.module.css'

export default function Formulaire () {
    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ phoneNumber, setPhoneNumber ] = useState('')
    const [ text, setText ] = useState('')

    return(
        <section>
            <div className={ styles.eventPage }>
                <div className={ styles.divH2 }>
                        <h2>
                        Contactez-Nous
                        </h2>
                        <form className={ styles.formulaire }>
                            <label>
                                First:
                                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                            </label>
                            <label>
                                Last:
                                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            </label>
                            <label>
                                Mobile Phone:
                                <input type="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                            </label>
                            <label>
                                Email:
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </label>
                            <label>
                                Message:
                                <input type="text" value={text} size="50" maxLength="500" onChange={(e) => setText(e.target.value)} />
                            </label>
                            <input type="submit" value="Submit" />
                        </form>
                </div>
            </div>
        </section>
    )
}