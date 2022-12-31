// 全然importしてないなら、機能の少ないコンポーネントである事が分かる
import Fab from '@mui/material/Fab';
import Icon from '@mui/material/Icon';

import { styled } from '@mui/material/styles';

type Props = {
  todos: Todo[];
  filter: Filter;
  alertOpen: boolean;
  dialogOpen: boolean;
  onToggleAlert: () => void;
  onToggleDialog: () => void;
};

const FabButton = styled(Fab)({
  position: 'fixed',
  right: 15,
  bottom: 15,
});

export const ActionButton = (props: Props) => {
  const removed = props.todos.filter((todo) => todo.removed).length !== 0;

  return (
    <>
    {/* HTMLを描画する前に、プロパティがあるかどうかで、表示するビューを切り替える */}
      {props.filter === 'removed' ? (
        <FabButton
          color="secondary"
          onClick={props.onToggleAlert}
          // disabled属性に対して、プロパティの値を or 演算子で付与する
          // 削除フラグになっている || alertOpenフラグがtrueなら、操作不能にする
          disabled={!removed || props.alertOpen}
        >
          <Icon>delete</Icon>
        </FabButton>
      ) : (
        <FabButton
          color="secondary"
          onClick={props.onToggleDialog}
          disabled={props.filter === 'checked' || props.dialogOpen}
        >
          <Icon>create</Icon>
        </FabButton>
      )}
    </>
  );
};
