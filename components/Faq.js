import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    question: "how long are the walks?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    question: "What does a walk include?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, asperiores?",
  },
  {
    question: "do you need keys to my house?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, asperiores?",
  },
  {
    question: "How can I schedule a service?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, asperiores?",
  },
  {
    question: "what payments do you accept?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, asperiores?",
  },
  {
    question: "what is your cancellation policy?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, asperiores?",
  },
  {
    question: "can you medically assist pets?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, asperiores?",
  },
  {
    question: "do you work on the weekends or holidays?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, asperiores?",
  },
];

export default function Faq() {
  return (
    <section
      className="
        h-screen overflow-hidden snap-start
        flex flex-col justify-evenly items-center"
    >
      <h1 className='font-heading text-2xl uppercase font-bold tracking-[0.3rem] text-center'>Frequently Asked Questions</h1>
      <div>
        {faqs.map((faq) => {
          return (
            <>
              <Accordion key={faq.question}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <h2 className='font-heading capitalize'>{faq.question}</h2>
                </AccordionSummary>
                <AccordionDetails>
                  <p>
                    {faq.answer}
                  </p>
                </AccordionDetails>
              </Accordion>
            </>
          )
        })}
      </div>
    </section>
  )
}
