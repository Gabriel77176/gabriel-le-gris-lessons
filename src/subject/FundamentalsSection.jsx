import React from "react";
import Toggle from "../components/Toggle.jsx";
import P from "../components/P.jsx";
import CodeBlock from "../components/CodeBlock.jsx";
import { HelpMessage, PrototypeMessage, TestMessage } from "../components/HighlightedMessage.jsx";
import Code from "../components/Code.jsx";

function FundamentalsSection() {
    return (
        <>
            <section className="w-full px-16 py-8">
                <h2 className="text-6xl font-bold pb-4">Fundamentals</h2>
                <CountVowels />
                <FindFirst />
                <LcsPart />
                <MasterMatcher />
            </section>
        </>
    );
}

function LcsPart() {
    return (
        <section className="w-full py-4">
            <h3 className="text-4xl text-red-500"><Code>lcs/lcs.rs</Code></h3>
            <Toggle title="LCSubstring" color={"fundamentals"}>
                <P>The idea is simply to find the (L)ongest (C)ommon (P)refix of two String.</P> 
                <HelpMessage>
                    <P>To ease indexing, you may want to cast the Strings to Vectors of char. Look up to collect the string if you are lost. Keep in mind collect() has a cost of O(n), but index using chars().nth() also does.</P>
                </HelpMessage>
                <PrototypeMessage>
                    <CodeBlock language="language-rust">
                        {`pub fn lcp(s1: String, s2: String) -> String { /* Todo */ }`}
                    </CodeBlock>
                </PrototypeMessage>
                <TestMessage>
                    <CodeBlock language="language-rust">
                        {`
mod lcp;
#[cfg(test)]
mod lcp_test {
    use crate::lcp::lcp;

    macro_rules! lcp_tests {
        ($($decode_name:ident: $encode_name:ident: $args:expr,)*) => {
            $(
                #[test]
                fn $encode_name() {
                    let (s1, s2, expected) = $args;
                    let result = lcp(&String::from(s1), &String::from(s2));
                    assert_eq!(result, String::from(expected));
                }

                #[test]
                fn $decode_name() {
                    let (s1, s2, expected) = $args;
                    let result = lcp(&String::from(s2), &String::from(s1));
                    assert_eq!(result, String::from(expected));
                }
            )*
        }
    }

    lcp_tests! {
        lcp_same:lcp_same_reverse: (
        "i1234e",
        "i1234e",
        "i1234e",
        ),
        lcp_empty:lcp_empty_reverse: (
        "",
        "",
        "",
        ),
        lcp_subset:lcp_subset_reverse: (
        "rtyuiopiuytfghu765",
        "rtyuiopasdfghjkl",
        "rtyuiop",
        ),
        lcp_still_empty:lcp_still_empty_reverse: (
        "qwertyuiop",
        "zxcvbnmnbvcxcvbn",
        "",
        ),
        lcp_unicode:lcp_unicode_reverse: (
        "🤩🤩😇🤩😇",
        "🤩🤩😇😇😇😇😇",
        "🤩🤩😇",
        ),
    }
}`}
                    </CodeBlock>
                </TestMessage>
            </Toggle>
        </section>
    );
}

function CountVowels() {
    return (
        <section className="w-full py-4">
            <h3 className="text-4xl text-red-500"><Code>findFirst/count_vowels.rs</Code></h3>
            <Toggle title="countVowels" color={"fundamentals"}>
                <P>The goal in here is to return the number of vowels of a given String
                    Return 0 if empty.</P>
                <PrototypeMessage>
                    <CodeBlock language="language-rust">
                        {`pub fn count_vowels(s: &str) -> usize {}`}
                    </CodeBlock>
                </PrototypeMessage>
            </Toggle>
        </section>
    );
}

function FindFirst() {
    return (
        <section className="w-full py-4">
            <h3 className="text-4xl text-red-500"><Code>findFirst/find_first.rs</Code></h3>
            <Toggle title="FindFirst" color={"fundamentals"}>
                <P>The find_first() function takes a string as input and returns the index of the patter given as parametter.
                    If not found, you should return the len of the string.</P>
                <PrototypeMessage>
                    <CodeBlock language="language-rust">
                        {`pub fn find_first(s: &str, pattern: &str) -> usize {}`}
                    </CodeBlock>
                </PrototypeMessage>
            </Toggle>
        </section>
    );
}

function MasterMatcher() {
    return (
        <section className="w-full py-4">
            {/* Title */}
            <h3 className="text-4xl text-red-500">
                <Code>findFirst/master_matcher.rs</Code>
            </h3>

            {/* Toggle Component */}
            <Toggle title="MasterMatcher" color="fundamentals">
                {/* Description */}
                <P>
                    Congratulations on making it this far! At this point, we assume
                    you've mastered string handling in Rust. Now, it's time for the
                    final challenge—proving your worth against the <Code>master_matcher()</Code> function.
                </P>

                <P>
                    This function is a **string matcher**, originally implemented in
                    **C** (you can check it out with <Code>man fnmatch</Code>). Your
                    task is to implement a simplified version in Rust. It will compare
                    a given **pattern** with an **input string** using specific matching
                    rules.
                </P>

                {/* Explanation of special characters */}
                <P>
                    Here are the three special matching rules you'll need to handle:
                </P>
                <ul className="list-disc list-inside pl-4">
                    <li>
                        <Code>?</Code> → Matches **any single character**.
                        <br />
                        Example: <Code>"hello.?"</Code> matches <Code>"hello.c"</Code>.
                    </li>
                    <li>
                        <Code>*</Code> → Matches **any sequence of characters** (including none).
                        <br />
                        Example: <Code>"hell*"</Code> matches <Code>"hello.c"</Code>, <Code>"hello"</Code>, and <Code>"hell"</Code>.
                    </li>
                    <li>
                        <Code>\</Code> → **Escapes** special characters (`?` and `*`).
                        <br />
                        Example: <Code>"hello\*"</Code> only matches <Code>"hello*"</Code> (literally).
                    </li>
                </ul>

                <P>
                    It might seem daunting at first, but trust me, **it's doable**!
                    Mastering this function will give you a strong foundation for
                    future Rust challenges.
                </P>

                <P>Here’s the function signature you'll be implementing:</P>
                <PrototypeMessage>
                    <CodeBlock language="rust">
                        {`pub fn master_matcher(pattern: &str, string: &str) -> bool {
    unimplemented!();
}`}
                    </CodeBlock>
                </PrototypeMessage>
            </Toggle>
        </section>
    );
}

export default FundamentalsSection;
