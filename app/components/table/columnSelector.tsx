import classNames from "classnames";

export default function ColumnSelector({ columns }) {


  return (
    <>
      <div className="is-flex">
        {columns.map(column => (
          <span className={classNames('tag', 'is-medium', { 'is-danger': true })}>
            {column}
          </span>
        ))}
      </div>
    </>
  )
}