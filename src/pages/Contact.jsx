import Section from "../components/Section";
import { TbMap2 } from "react-icons/tb";
import { MdOutlineMail } from "react-icons/md";
import HitMeIcon from "../components/HitMeIcon";

function Contact() {
  return (
    <Section id="contact">
      <div className="">
        <h3 className="text-blue-500 uppercase text-lg font-bold">contact</h3>
        <h2 className="font-bold text-2xl">Don't be shy! Hit me up! 👇</h2>

        <div className="flex gap-20 mt-16 flex-wrap">
          <HitMeIcon
            icon={TbMap2}
            title="Location"
            description="Krakow, Poland"
          />
          <HitMeIcon
            icon={MdOutlineMail}
            title="Mail"
            description={
              <a href="mailto:mateuszropek@onet.pl">mateuszropek@onet.pl</a>
            }
          />
        </div>
      </div>
    </Section>
  );
}

export default Contact;
