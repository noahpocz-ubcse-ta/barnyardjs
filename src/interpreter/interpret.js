import { tokenize } from './tokenizer';

const interpret = line => {
    console.log(tokenize(line))
}

export default interpret;