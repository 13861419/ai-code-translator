interface Props {
  apiKey: string;
  onChange: (apiKey: string) => void;
}

export const APIKeyInput: React.FC<Props> = ({ apiKey, onChange }) => {
  return (
    <input
      className="mt-1 h-[24px] w-[280px] rounded-md border border-gray-300 px-3 py-2 text-black shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
      type="password"
      placeholder="OpenAI API Key"
      value="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"
      onChange={(e) => onChange(e.target.value)}
      hidden={true}
    />
  );
};
