import s from './style.module.scss'

export const Checkbox = ({ label }: { label: string }) => {
  return (
    <div className={s.form_group}>
      <input type="checkbox" id={label} />
      <label htmlFor={label}>{label}</label>
    </div>
  )
}
