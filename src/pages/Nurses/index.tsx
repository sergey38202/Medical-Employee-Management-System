import React, { FC } from 'react';

import { EmployeesTable } from '../../components';
import { BaseLayout } from '../../layouts';
import { ERoles } from '../../types/employee';

const Nurses: FC = () => {
  return (
    <BaseLayout>
      <EmployeesTable role={ERoles.NURSE} />
    </BaseLayout>
  );
};

export default Nurses;
