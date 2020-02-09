import * as React from "react";

import Link from "next/link";
import { User } from "../interfaces";
import { useTranslation } from "../lib/i18n";

type Props = {
  data: User;
};

const ListItem: React.FunctionComponent<Props> = ({ data }) => {
  const { t } = useTranslation("global");
  console.log(t);
  return (
    <Link href="/users/[id]" as={`/users/${data.id}`}>
      <a>
        {data.id}: {t(data.name)}
      </a>
    </Link>
  );
};

export default ListItem;
