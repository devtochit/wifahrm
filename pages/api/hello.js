// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

<form
// noValidate
// onSubmit={handleSubmit(loginAdmin)}
>
<div className="ds-card-body">
  <div className="flex flex-col items-center">
    <span className="w-20 h-20 p-4 mb-4 rounded-full bg-primary text-primary-content">
      {/* <LogoSvg className="fill-current" /> */}
    </span>
    <h1 className="text-3xl font-semibold">Login</h1>
    <p className="text-lg opacity-75">Use your credentials to gain access.</p>
  </div>
  <div className="ds-form-control">
    <label htmlFor="form-email" className="ds-label">
      Email
    </label>
    <div className="relative">
      <input
        name="email"
        id="form-email"
        type="email"
        placeholder="admin@demo.com"
        className={`ds-input ds-input-bordered w-full pr-12
                      `}
        
      />
      <label
        htmlFor="form-email"
        className="absolute inset-y-0 inline-flex items-center right-4"
      >
        {/* <User variant="TwoTone" /> */}
      </label>
    </div>
    {/* {errors.email && <p className="text-sm text-error mt-1">{errors.email}</p>} */}
  </div>

  <div className="ds-card-actions pt-4 justify-center">
    <button
      type="submit"
      className="ds-btn ds-btn-primary ds-btn-block"
      // disabled={(touched.email || touched.password) && !isValid}
    >
      Log In
    </button>
  </div>
</div>
</form> 

