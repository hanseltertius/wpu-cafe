import Button from './components/ui/Button';
import {
  ButtonColor,
  ButtonIconType,
} from './components/ui/Button/Button.constants';
import Input from './components/ui/Input';

function App() {
  // return <Input id="test" label="Test" required />;
  return (
    <Button
      id="search"
      iconType={ButtonIconType.DELETE}
      color={ButtonColor.DANGER}
      isIcon
      isCircularIcon
    />
  );
}

export default App;
