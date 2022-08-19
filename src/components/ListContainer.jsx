import React from 'react'

export default function ListContainer({ data, handleSubmit }) {
  return (
    <div className="list-container">
      {data && <List data={data} onClickHandler={handleSubmit} />}
    </div>
  )
}

const List = ({ data, onClickHandler }) => {
  const result = (data || []).map((item) => (
    <Item key={item.id} data={item} onClickHandler={onClickHandler} />
  ))
  return <ul>{result}</ul>
}

const Item = ({ data, onClickHandler }) => (
  <div className="item">
    <li id={data.id} onClick={onClickHandler(data.id)}>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </li>
  </div>
)
