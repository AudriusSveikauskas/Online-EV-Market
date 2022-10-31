import React, { useEffect, useState } from 'react';
import axios from 'axios';
import post from '@/services/fetch/post';
import FilterSettingsBox from '@/components/basics/FilterSettingsBox';
import BasicTextField from '@/components/basics/TextFields/BasicTextField';
import AddNewSettingsButton from '@/components/basics/Buttons/AddNewSettingsButton';
import AlertMsg from '@/helpers/AlertMsg';

type AddNewSettingsProps = {
  _id?: string;
  id: string;
  label: string;
  endpoint: string;
  action?: (action: boolean) => void;
  btnLabel?: string;
};

const AddNewSettings: React.FC<AddNewSettingsProps> = ({
  _id,
  id,
  label,
  endpoint,
  action,
  btnLabel,
}) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMsg, setDialogMsg] = useState({
    title: '',
    contentText: '',
    status: -1,
  });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onClickHandler = async () => {
    const options = { _id, name: inputValue };

    try {
      const res = await post(endpoint, options);
      setDialogMsg({
        title: res.data.title,
        contentText: res.data.message,
        status: res.status as number,
      });

      if (action) {
        action(true);
      }

      setInputValue('');
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setDialogMsg({
          title: error.response.data.title,
          contentText: error.response.data.message,
          status: error.response.status as number,
        });
      } else {
        setDialogMsg({
          title: 'Server Error:',
          contentText: `${error}. Please contact site administrator.`,
          status: 500,
        });
      }
    }
    setDialogOpen(true);
  };

  const dialogOnClickHandler = () => {
    setDialogOpen(false);
  };

  useEffect(() => {
    if (inputValue.length > 1) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [inputValue]);

  return (
    <FilterSettingsBox>
      <BasicTextField
        id={`${id}-input`}
        label={label}
        value={inputValue}
        onChange={onChangeHandler}
      />
      <AddNewSettingsButton
        id={`${id}-button`}
        label={label}
        isDisabled={isDisabled}
        onClick={onClickHandler}
      >
        {btnLabel}
      </AddNewSettingsButton>
      <AlertMsg
        msg={dialogMsg}
        open={dialogOpen}
        onClick={dialogOnClickHandler}
      />
    </FilterSettingsBox>
  );
};

export default AddNewSettings;
