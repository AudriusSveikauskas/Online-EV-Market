import { useDispatch } from 'react-redux';
import { searchActions } from '@/store/search/search';

export default function resetSearchState() {
  const dispatch = useDispatch();

  dispatch(searchActions.setMakeId('-1'));
  dispatch(searchActions.setModelId('-1'));
}
