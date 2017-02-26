import React from 'react';

const TextInput = ({placeholder, onSubmit, user}) => {
  let input;
  return (
    <div>
      <form className="form" onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return
        }
        onSubmit(input, user);
        input.value = ''
      }}>
        <div className="input-group input-group-lg">
          <input className="form-control" placeholder={placeholder} ref={node => {
            input = node;
          }}/>
          <span className="input-group-btn">
              <button type="submit" className="btn btn-primary">Send</button>
            </span>
        </div>
      </form>
    </div>
  );
};

export default TextInput;
