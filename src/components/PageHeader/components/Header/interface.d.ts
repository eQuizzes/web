export interface HeaderProps {
  isMenuIcon: boolean;
  title: string;
  onClick: function();
  student: boolean;
  type: 'icon' | 'back' | 'exit';
  text?: string;
}
