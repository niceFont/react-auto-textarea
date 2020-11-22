import * as React from 'react';

const AutoTextArea: React.FunctionComponent<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = ({
  children,
  value,
  onChange,
  ...props
}) => {
  const getRows = (text : string) : number => (text ? text.split('\n').length : 1);
  const areaRef = React.useRef<HTMLTextAreaElement>(null);
  const [rows, setRows] = React.useState<number>(getRows(value as string));

  const handleChange = React.useCallback((e : React.ChangeEvent<HTMLTextAreaElement>) => {
    setRows(getRows(e.target.value));
    onChange?.call(null, e);
  }, []);
  return (
    <textarea
      onChange={handleChange}
      rows={rows}
      ref={areaRef}
      value={value}
      {...props}
    >
      {children}
    </textarea>
  );
};
export default AutoTextArea;
