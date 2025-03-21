import Accordion from "../Accordion/Accordion";

export default function Faq() {
  return (
    <div className="mx-auto max-w-[800px] space-y-6 pb-16 pt-20 text-center">
      <h2 className="mb-4 text-[30px] font-bold text-primary-100 sm:text-5xl">
        Frequently Asked <span className="text-secondary-200">Questions</span>
      </h2>
      <p className="text-primary-200">
        We've compiled a list of the most frequently asked questions about
        SmartNotes to help you get the information you need. If you have any
        other questions, feel free to reach out to our support team.
      </p>
      <div className="space-y-5 pt-[72px]">
        <Accordion />
      </div>
    </div>
  );
}
