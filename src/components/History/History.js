import React from "react";
import Slots from "../Slots";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import {range} from '../../utils'

function History({ guesses, answer }) {
    return(

<div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((num, index) => (
            <Slots key={index} value={guesses[num]} answer={answer}/>
        ))}
</div>
);

}

export default History;