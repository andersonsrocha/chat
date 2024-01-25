import React from "react";
import { Highlight } from "@ant-design/pro-editor";

import { AppContext } from "../../contexts";

const Home: React.FC = () => {
  const { read } = React.useContext(AppContext);

  return (
    <div className="h-full overflow-y-auto scrollbar-thumb-[#21252b] scrollbar-thin scrollbar-track-transparent">
      <Highlight className="min-h-full [&_pre]:!overflow-x-hidden" lineNumber>
        {read}
      </Highlight>
    </div>
  );
};

export { Home };
