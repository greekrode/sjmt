import React, { useState, useEffect } from "react";
import { IntlProvider } from "react-intl";

async function getMessages(locale: string) {
  return await import(`../../../lang/${locale}.json`);
}

type IntlContainerProps = {
  locale: string;
  children: React.ReactNode;
};

function IntlContainer({ locale, children }: IntlContainerProps) {
  const [messages, setMessages] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMessages() {
      const msgs = await getMessages(locale);
      setMessages(msgs);
      setLoading(false);
    }
    loadMessages();
  }, [locale]);

  if (loading) {
    return <div>Loading...</div>; // Or any other loading indicator
  }

  return (
    <IntlProvider locale={locale} messages={messages} defaultLocale="en">
      {children}
    </IntlProvider>
  );
}

export default IntlContainer;
