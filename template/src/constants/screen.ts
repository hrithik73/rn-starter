import Form from '~/screens/examples/Form';
import List from '~/screens/examples/List';

export const screenName = {
  login: {
    name: 'Login',
    headerTitle: '',
  },
  signUp: {
    name: 'SignUp',
    headerTitle: '',
  },
  home: {
    name: 'Home',
    headerTitle: 'Home',
  },
  setting: {
    name: 'Setting',
    headerTitle: 'Setting',
  },
  queryExample: {
    name: 'QeuryExample',
    headerTitle: 'Star War Characters',
  },
} as const;

export const ExampleScreens = [
  {
    id: 1,
    name: 'List',
    component: List,
  },
  {
    id: 2,
    name: 'Form',
    component: Form,
  },
];
