import React, { useState } from 'react'
import { Container } from './styles'
import { SequenceNumber } from './sequenceNumber'

const Home = () => {

    const [number, setNumber] = useState('')

    const numbers = e => {
        const number = e.target.value;
        console.log(number);
        // SequenceNumber(number);
    }

    return (
        <Container>
            <form>
                <div>
                    <label>
                        Número:
                        <input
                            type="text"
                            name="number"
                            required
                            value={number}
                            onChange={(e) => setNumber(e)}
                        />
                    </label>
                </div>
                <button type="submit" >
                    Achar sequencia
                </button>
            </form>

            <p>{number}</p>
        </Container>
    );
}


export default Home;