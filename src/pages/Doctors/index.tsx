import React, { FC } from 'react';

import { EmployeesTable } from '../../components';
import { ERoles } from '../../types/employee';
import { BaseLayout } from '../../layouts';

const Doctors: FC = () => {
  return (
    <div>
      <BaseLayout>
        <EmployeesTable role={ERoles.DOCTOR} />
      </BaseLayout>
    </div>
  );
};

export default Doctors;
