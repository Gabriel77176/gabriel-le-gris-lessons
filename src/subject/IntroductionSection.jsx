import React from "react";
import P from "../components/P";
import Toggle from "../components/./Toggle.jsx";
import CodeBlock from "../components/CodeBlock";
import { HelpMessage, WarningMessage } from "../components/HighlightedMessage.jsx";
import UL from "../UL.jsx";

function IntroductionSection() {
    return (
        <>
            <section className="w-full px-16 py-8">
                <h2 className="text-6xl font-bold">Introduction</h2>
                <Consignes />
                <Architecture />
            </section>
        </>

    );
}

function Consignes() {
    return (
        <Toggle title="Consignes" color="info">
            <P>Voici un TP de soutien, vous étant proposé pour préparer l'exam. Ce TP est surement plus dur que votre examen a venir.</P>
            <div className="h-4" />
            <P>La partie Fondamentaux de ce TP est réalisable en 1 à 2 heures. Nous nous attendons à ce que vous ayez au moins (ou presque) fini les Fondamentaux avant votre code review.</P>
            <div className="h-4" />
            <P>Bon TP et n'hésitez pas à poser des questions au besoin, d'abord à Claude, puis sur discord.</P>
        </Toggle>
    )
}

function Architecture() {
    return (
        <Toggle title="Architecture" color="info">
            <P>At the end, your git repo must follow this architecture:</P>
            <CodeBlock langage="">
                {`.
├── .gitignore
├── README
├── src
│    ├── lcp.rs
│    ├── findFirst
│    │      │        
│    │      └── *.rs
│    └── advanced (optional)
│           │        
│           └── *.rs
├── test (optionnal)
│    │        
│    └── *.rs
└── Cargo.toml`}
            </CodeBlock>

            <HelpMessage>
                <P>You can check your current repository tree with the command below: </P>
                <CodeBlock langage="language-bash">
                    {`tree . -I 'obj|bin|.idea|.git' -a`}
                </CodeBlock>
            </HelpMessage>
            <WarningMessage>
                <P>Do not forget to check the following requirements before submitting your work:</P>
                <UL>
                    <li>The test folder is not mandatory, but feel free to add some tests</li>
                    <li>If the tests do not compile, make sur your functions are declared public</li>
                    <li>You may choose to work with ascii characters or Unicode. Though Unicode would make more sense to be fair. If the previous phrase doesn't make sense to you, ask Claude.</li>
                    <li>You may not follow the architecture. But you'll have to dig into the tests we give you.</li>
                </UL>
            </WarningMessage>
        </Toggle>
    )
}
export default IntroductionSection;
