import React from "react";

import ContactFrom from "../../components/ContactForm";
import ContentBlock from "../../components/ContentBlock";
import MiddleBlock from "../../components/MiddleBlock";
import Container from "../../common/Container";
import ScrollToTop from "../../common/ScrollToTop";

import Introduction from "../../content/introduction.json";
import FirstBlock from "../../content/firstBlock.json";
// import SecondBlock from "../../content/secondBlock.json";
import ThirdBlock from "../../content/thirdBlock.json";
import FourthBlock from "../../content/fourthBlock.json";
import ContactBlock from "../../content/contactBlock.json";
import six from '../../content/six.json';
import seven from "../../content/seven.json"

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        first="true"
        title={Introduction.title}
        content={Introduction.text}
        button={Introduction.button}
        icon="yummeal_top.svg"
      />
      <ContentBlock
        type="left"
        title={FourthBlock.title}
        content={FourthBlock.text}
        // icon="yummeal_bottom.svg"
      />
      <ContentBlock
        type="right"
        title={ThirdBlock.title}
        content={ThirdBlock.text}
        // icon="mid.svg"
      />
      <ContentBlock
        type="left"
        title={six.title}
        content={six.text}
        // icon="yummeal_bottom.svg"
      />
      <ContentBlock
        type="right"
        title={seven.title}
        content={seven.text}
        // icon="yummeal_mid.svg"
      />
      <MiddleBlock
        title={FirstBlock.title}
        content={FirstBlock.text}
        button={FirstBlock.button}
      />

      <ContactFrom title={ContactBlock.title} content={ContactBlock.text} />
    </Container>
  );
};

export default Home;
