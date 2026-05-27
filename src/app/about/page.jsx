import Image from "next/image";
import cycle from "../../assets/images/20201029_120135-01-01.jpeg"

const AboutPage = () => {
    return (
      <div>
        <h2>This is about page</h2>
        <div className="flex justify-between items-center px-20 flex-wrap">
          <Image src="/m.jpeg" width="500" height="200" alt="mizan pic"></Image>
          <Image src={cycle} width="300" height="500" alt="cycle pic"></Image>
        </div>
      </div>
    );
};

export default AboutPage;