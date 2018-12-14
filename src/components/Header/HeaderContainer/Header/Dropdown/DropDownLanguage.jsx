import React from 'react';

const dropDownLanguage = (props) => {
  const items = props.items.map(item => (
    <li><a >{item}</a></li>
  ));
  
  return(
    <div className=" pl-0 col-md-6 col-xs-6">
      <div className="dropdown btn-group">
        <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">{props.name}
          <span className="caret" /></button>
        <ul className="dropdown-menu">
          {items}
        </ul>
      </div>
    </div>
  )
}

export default dropDownLanguage;
