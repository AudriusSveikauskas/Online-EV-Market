import { MILEAGE } from '@/utils/constants/constants';
import { Options } from '@/components/basics/TextFields/SelectTextField';

const createMileageOptions = () => {
  const optionsArr: Options[] = [];

  for (let i = 0; i < MILEAGE.length; i += 1) {
    const optionValue = String(MILEAGE[i]);

    const optionLabel = String(
      new Intl.NumberFormat('ja-JP', {
        maximumSignificantDigits: 3,
      }).format(MILEAGE[i]),
    );

    optionsArr.push({ _id: optionValue, name: optionLabel });
  }

  return optionsArr;
};

export default createMileageOptions();
