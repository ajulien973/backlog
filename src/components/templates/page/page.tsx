import React, { PropsWithChildren } from "react";

import Header from "components/organisms/header";
import Title from "components/atoms/typography/title";
import Footer from "components/organisms/header";

export interface PageTemplateProps {
  title: string;
}

export const Page = ({
  title,
  children,
}: PropsWithChildren<PageTemplateProps>) => (
  <div>
    <Header>
      <Title>{title}</Title>
    </Header>
    {children}
    <Footer />
  </div>
);

export default Page;
