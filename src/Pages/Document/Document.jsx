import './Document.scss';

import { memo } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Document() {

  return (
    <>
      <div className="container text-danger">
        Document    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis deserunt reprehenderit voluptas quis, voluptatum dolore dolorum voluptates fuga quos provident, earum atque quia dignissimos sint eaque fugit. Eveniet, vitae maxime!
      </div >
    </>
  )

}
export default memo(Document)