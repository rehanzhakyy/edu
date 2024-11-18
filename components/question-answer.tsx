import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function AccordionDemo() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is EDU, and who is it for?</AccordionTrigger>
          <AccordionContent>
          EDU is an online coding education platform designed for learners of all levels—beginners, intermediate, and advanced. Whether you’re exploring coding for the first time or looking to advance your career, EDU offers courses tailored to your goals.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>What makes EDU different from other online coding platforms?</AccordionTrigger>
          <AccordionContent>
          EDU stands out with its interactive learning approach, real-world projects, and expert mentors who provide personalized feedback. Our curriculum focuses on hands-on skills to ensure you’re job-ready upon course completion.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>What courses are available on EDU?</AccordionTrigger>
          <AccordionContent>
          EDU offers a wide range of courses, including Web Development, Mobile App Development, Data Science, Machine Learning, and more. Each course is designed to provide both theoretical knowledge and practical skills.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Do I need prior coding experience to join EDU?</AccordionTrigger>
          <AccordionContent>
          Not at all! EDU offers beginner-friendly courses that start from the basics. If you’re an experienced coder, our advanced courses will challenge and help you refine your expertise.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>How does EDU help me prepare for a career in tech?</AccordionTrigger>
          <AccordionContent>
          EDU equips you with industry-relevant skills through project-based learning and mentorship. We also provide career support, including portfolio reviews, interview preparation, and guidance on landing your dream job in tech.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>Can I learn at my own pace with EDU?</AccordionTrigger>
          <AccordionContent>
          Yes! EDU provides flexible learning options, allowing you to learn at your own pace. You can access course materials anytime, anywhere, making it easy to fit learning into your schedule.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
    )
  }
  