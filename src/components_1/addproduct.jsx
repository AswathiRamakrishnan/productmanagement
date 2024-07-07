function Addproduct(){
    return( 
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            backgroundImage: 'linear-gradient(to right, #ebf8ff, #cfe3ff)',
          }}>
            <div style={{
              width: '100%',
              maxWidth: '28rem',
              padding: '2rem',
              backgroundColor: 'white',
              borderRadius: '1.5rem',
              boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
            }}>
              <div style={{
                marginBottom: '1.5rem',
                textAlign: 'center',
              }}>
                <h1 style={{
                  fontSize: '1.875rem',
                  fontWeight: 'bold',
                }}>Add Product Form  </h1>
                <p style={{
                  color: '#6b7280',
                }}></p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label htmlFor="productname" style={{
                    display: 'block',
                    marginBottom: '0.25rem',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#374151',
                  }}>Product name</label>
                  <input
                    type="text"
                    id="productname"
                    onChange={(e) => setProductName(e.target.value) }
                    placeholder="Enter your productname"
                    style={{
                      width: '100%',
                      padding: '0.5rem 0.75rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '0.375rem',
                      outline: 'none',
                      boxShadow: '0 0 0 2px transparent',
                      transition: 'box-shadow 0.2s',
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="description" style={{
                    display: 'block',
                    marginBottom: '0.25rem',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#374151',
                  }}>Description</label>
                  <input
                    id="description"
                    type="type"
                    
      
                    placeholder="Description"
                    style={{
                      width: '100%',
                      padding: '0.5rem 0.75rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '0.375rem',
                      outline: 'none',
                      boxShadow: '0 0 0 2px transparent',
                      transition: 'box-shadow 0.2s',
                    }}
                    
                  />
                </div>
                <div>
                  <label htmlFor="price" style={{
                    display: 'block',
                    marginBottom: '0.25rem',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#374151',
                  }}>Price</label>
                  <input
                    id="price"
                    type="price"
                
      
                    placeholder="Price"
                    style={{
                      width: '100%',
                      padding: '0.5rem 0.75rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '0.375rem',
                      outline: 'none',
                      boxShadow: '0 0 0 2px transparent',
                      transition: 'box-shadow 0.2s',
                    }}
                
                  />
                </div>
                <div>
                  <label htmlFor="category" style={{
                    display: 'block',
                    marginBottom: '0.25rem',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#374151',
                  }}>Category</label>
                  <input
                    id="category"
                    type="type"
                    
                    placeholder="Category"
                    style={{
                      width: '100%',
                      padding: '0.5rem 0.75rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '0.375rem',
                      outline: 'none',
                      boxShadow: '0 0 0 2px transparent',
                      transition: 'box-shadow 0.2s',
                    }}
                    
                  />
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}>
                  <button style={{
                    padding: '0.5rem 1rem',
                    fontWeight: '500',
                    color: 'white',
                    backgroundColor: '#3b82f6',
                    borderRadius: '0.375rem',
                    border: 'none',
                    outline: 'none',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s',
                  }}
                  >
                    Add Product
                  </button>
            
                </div>
      
              </div>
            </div>
          </div>
        );
      };
      
      export default Addproduct;
      

