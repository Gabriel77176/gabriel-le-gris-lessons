import {React} from "react";
import Code from "../components/Code.jsx";
import Toggle from "../components/Toggle.jsx";
import P from "../components/P.jsx";
import { PrototypeMessage } from "../components/HighlightedMessage.jsx";
import CodeBlock from "../components/CodeBlock.jsx";

function ProficienciesSection() {
    return (
        <>
            <section className="w-full px-16 py-8">
                <h2 className="text-6xl font-bold pb-4">Proficiencies</h2>
                <P>This is more advanced exercises, but interesting one if you want to step up and master Strings.</P>
                <div className="my-4" />
                <StrTok />
            </section>
        </>
    );
}

function StrTok() {
    return (
        <section className="w-full py-4">
            <h3 className="text-4xl text-red-500"><Code>advanced/advanced.rs</Code></h3>
            <Toggle title="strtok" color={"proficiencies"}>
                <P>The strtok function is used to tokenize (split) a string into smaller parts (tokens) based on a specified delimiter...Again you should check the man page or the following <a href="https://www.tutorialspoint.com/c_standard_library/c_function_strtok.htm" target="_blank" className="text-red-500"> page </a>for more information.</P>
                <PrototypeMessage> 
                    <CodeBlock language="language-rust">
                        {`
#[cfg(test)]
mod tests {
    use crate::tok::StrTokenizer;

    #[test]
    fn test_global() {
        let mut text = String::from("hello,world;this:is rust!");
        let delimiters = ",;: ";
        let mut tokenizer = StrTokenizer::new(&mut text, delimiters);

        assert_eq!(tokenizer.next(), Some("hello".to_string()));
        assert_eq!(tokenizer.next(), Some("world".to_string()));
        assert_eq!(tokenizer.next(), Some("this".to_string()));
        assert_eq!(tokenizer.next(), Some("is".to_string()));
        assert_eq!(tokenizer.next(), Some("rust!".to_string()));
        assert_eq!(tokenizer.next(), None);
    }
}
`}
                    </CodeBlock>
                </PrototypeMessage>
            </Toggle>
        </section>
    );
}


export default ProficienciesSection;
